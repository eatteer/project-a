import styles from 'components/Button/styles'

export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      <style jsx>{styles}</style>
    </>
  )
}