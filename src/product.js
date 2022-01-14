import img1 from './images/oculus.jpg';
import img2 from './images/acer.jpg';







const products = [{
  
  _id: '1',
  name: 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset',
  image: `${img1}`,
  description: 'Quest 2 is non-stop fun. The biggest titles and multi-player games—we have them. New ways to workout, socialize or lose track of time—we have those too. And our library keeps growing every day. Discover what’s possible on Quest 2.',
  brand: 'Meta',
  category: 'Electronics',
  price: '300',
  countInStock: 30,
  rating: 5,
  numReviews: 5600,
},

{
  _id: '2',
  name: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5 10300H ',
  image: `${img2}`,
  description: 'Acer gaming laptops deliver advanced performance for all gamers. The Nitro lineup of gaming PCs and accessories are ideal for casual gamers who are ready for something better',
  brand: 'ACER',
  category: 'Electronics',
  price: '800',
  countInStock: 12,
  rating: 4.5,
  numReviews: 764,

}






];

export default products;