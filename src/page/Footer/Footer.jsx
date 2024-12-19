import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              We specialize in creating breathtaking landscape paintings. Our mission is to capture the beauty of nature in each piece of art we create.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="text-sm space-y-2">
              <li>Email: info@landscapepainting.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Address: 123 Art Street, Dhaka, Bangladesh</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Landscape Painting</li>
              <li>Custom Commissions</li>
              <li>Art Workshops</li>
              <li>Online Gallery</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <MapContainer center={[23.8103, 90.4125]} zoom={13} className="h-40 w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[23.8103, 90.4125]}>
                <Popup>
                  Dhaka, Bangladesh
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-center mb-4">Stay Connected</h4>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center py-4 border-t border-gray-700 mt-8">
          <p>&copy; {new Date().getFullYear()} Landscape Painting. All rights reserved by  Nadim Mostofa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
