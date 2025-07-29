export default function Footer() {
  return (
    <div className="w-full bg-white mt-auto">
      <hr className="my-4 border-gray-300" />
      <p className="text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Laércio Bubiak da Cruz. All rights
        reserved.
      </p>
    </div>
  );
}
