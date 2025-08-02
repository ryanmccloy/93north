function Button({ children, secondary = false }) {
  return secondary ? (
    <button className="btn border text-[var(--color-accent)] border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white bg-transparent">
      {children}
    </button>
  ) : (
    <button className="btn border-none text-white bg-[var(--color-accent)]">
      {children}
    </button>
  );
}

export default Button;
