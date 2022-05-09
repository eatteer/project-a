import { DragEventHandler, useRef, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'

import { getDownloadURL } from 'firebase/storage'

import { uploadImage } from 'firebase_app/client/storage/uploadImage'
import { composeDevit } from 'firebase_app/client/firestore/devits/composeDevit'

import Button from 'components/Button/Button'

import styles from 'pages/compose/devit/index.module.css'
import TopBar from 'components/TopBar/TopBar'
import CreateDevitDTO from 'firebase_app/client/firestore/createDevitDTO'

enum COMPOSE_STATES {
  ERROR,
  NONE,
  UPLOADING,
  SUCCESS,
}

enum DRAG_STATES {
  ERROR,
  NONE,
  ENTER,
  LEAVE,
  DROP,
}

export default function ComposeDevitPage() {
  console.log('Rendering ComposeDevitPage')

  const router = useRouter()

  const { user } = useUser()

  const [composeStatus, setComposeStatus] = useState(COMPOSE_STATES.NONE)
  const [dragState, setDragState] = useState(DRAG_STATES.NONE)

  const [content, setContent] = useState('')

  const fileImage = useRef(null)
  const [localImageUrl, setLocalImgUrl] = useState(null)

  const onChange = (event) => {
    const { value } = event.target
    setContent(value)
  }

  const onDragEnter: DragEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault()
    setDragState(DRAG_STATES.ENTER)
  }

  const onDragLeave: DragEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault()
    setDragState(DRAG_STATES.LEAVE)
  }

  const onDrop: DragEventHandler<HTMLTextAreaElement> = async (event) => {
    event.preventDefault()
    setDragState(DRAG_STATES.DROP)

    /* Get selected file */
    const file = event.dataTransfer.files.item(0)
    fileImage.current = file

    /* Create url to preview selected image */
    const url = URL.createObjectURL(file)
    setLocalImgUrl(url)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setComposeStatus(COMPOSE_STATES.UPLOADING)

    /* Initializate image url on null, this way if image file is not selected
    then imageUrl firestore document property is null */
    let attachedImageUrl = null

    /* If image file is selected */
    if (fileImage.current) {
      const uploadResult = await uploadImage(fileImage.current)
      const imageReference = uploadResult.ref
      attachedImageUrl = await getDownloadURL(imageReference)
    }

    /* Create devit */
    const { id, username, avatarUrl } = user

    const devit = new CreateDevitDTO(
      content,
      attachedImageUrl,
      id,
      username,
      avatarUrl
    )

    composeDevit(devit)

    /* Navigate to home */
    router.push('/')
  }

  const isButtonDisabled =
    content.length === 0 || composeStatus === COMPOSE_STATES.UPLOADING

  return (
    <>
      <Head>
        <title>Create a Devit / Project A</title>
      </Head>
      <TopBar canBack title={'Create a Devit'} />
      <form className={styles.form} onSubmit={onSubmit}>
        {user && (
          <div className={styles.avatarContainer}>
            <Image
              className={styles.avatar}
              src={user.avatarUrl}
              alt='Avatar image'
              layout='fill'
            />
          </div>
        )}
        <div className={styles.content}>
          <textarea
            className={`${styles.textarea} ${
              dragState === DRAG_STATES.ENTER && styles.dragOver
            }`}
            value={content}
            placeholder='What is going on?'
            onChange={onChange}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          ></textarea>
          {localImageUrl && (
            <div className={styles.imageContainer}>
              <button
                className={styles.cancelButton}
                onClick={() => {
                  setLocalImgUrl(null)
                  fileImage.current = null
                }}
              >
                X
              </button>
              <Image
                className={styles.image}
                src={localImageUrl}
                alt='Uploaded image'
                layout='responsive'
                width={200}
                height={100}
              />
            </div>
          )}
          <div className={styles.buttonContainer}>
            <Button onClick={() => {}} disabled={isButtonDisabled}>
              Devit
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
