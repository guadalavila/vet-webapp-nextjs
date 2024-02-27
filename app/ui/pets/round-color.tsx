function RoundColor({ bgColor }: { bgColor: string }) {
  return (
    <div
      className={`mx-1 my-auto h-6 w-6 rounded-2xl shadow-lg`}
      style={{ backgroundColor: bgColor }}
    ></div>
  );
}
export default RoundColor;
