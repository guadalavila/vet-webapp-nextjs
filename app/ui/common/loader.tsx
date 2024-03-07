function Loader() {
  return (
    <div className="m-auto flex h-full items-center justify-center">
      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className="h-32 w-32 animate-spin"
        style={{ animation: 'spin 1s linear infinite' }}
      >
        <circle
          cx="400"
          cy="400"
          fill="none"
          r="191"
          strokeWidth="50"
          stroke="#6366f1"
          strokeLinecap="round"
          strokeDasharray="800 1400"
        />
      </svg>
    </div>
  );
}
export default Loader;
