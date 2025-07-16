export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">&copy; 2023 MarTec. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

