import { Navigate, Route, Routes } from 'react-router-dom';
import { CartPage, ExplorePage, HomePage, ProductPage } from '../pages';
import { NavigationBar, TopBar } from '../components';

const product = {
  category: "Headphones",
  image: "https://res.cloudinary.com/dii4zhpsy/image/upload/v1741129190/productPhotos/peripherals/headphones/u8towtsknetmtus18cmz.jpg",
  name: "Audio Technica ATH-M50xBT2 Wireless Over-Ear Headphones - Black",
  options: [
    "Option 1",
    "Option 2",
    "Option 3",
  ],
  price: {
    current: 430.75,
    discount: .21,
  },
  specs: [
    "The ATH-M50xBT2 is the second generation of our critically acclaimed M-Series wireless over-ear headphones. These headphones feature 45 mm large aperture drivers in a wireless design, so listeners will enjoy the same sonic signature of the legendary ATH-M50x studio headphones.",    
    "Building on the acclaimed sonic signature of the ATH-M50x headphones, the ATH-M50xBT2 headphones utilize Bluetooth wireless technology and offer the same studio-quality sound in a wireless package.",
    "The multipoint pairing function allows users to stay connected to two Bluetooth devices at once, making it easier than ever to switch between tasks. You can also personalize and adjust the ATH-M50xBT2 to your preferences with the A-T Connect app.",
    'Included Accessories: The ATH-M50xBT2 comes with a 1.2 m (3.9") cable for an optional wired connection.',
  ]
}

export const EcommerceRoutes = () => {
  return (
    <>
      <TopBar />
      <NavigationBar />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  )
}
