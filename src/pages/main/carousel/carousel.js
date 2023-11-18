import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'

const TextCarousel = () => {
  const items = [
    {id: 1, name: 'Dayo Ogungbemi', comment: '" I came here for my first tattoo and I  will definitely be coming back here for all my tattoos going forward. Incredible place, amazing staff! My tattoo artist llena made my first tattoo experience as painless and peaceful as possible and played meditation music to ease any anxiety throughout my session.She also provided thoroughly useful and easy to follow instructions in regards to the healing process! Overall fantastic experience 10/10 highly recommend llena!! "'},
    { id: 9, name: 'Lisa Anderson', comment: '" I could not be happier with my tattoo from Ilena! She was so great to work with and I will definitely be booking with her again. "' },
    { id: 8, name: 'Victoria Nykorak', comment: '"I had the pleasure of being tattooed by Ilena, she was amazing to deal with. She is kind, professional and makes the whole experience fun and very relaxing. She was amazing with design ideas and placement, and was so positive and engaged throughout the process. best of all-she truly does amazing work! Can’t wait wait to work with her again soon! "' },
    { id: 3, name: 'Shelby Boyle', comment: '" I grabbed some adorable flash from Ilena recently and my experience was great!! The tattoo is awesome, the shop was super clean, and Ilena was so nice. I love when my tattoo artist is excited like I am!! I’ll definitely be back, and I would definitely recommend "' },
    { id: 4, name: 'Harlene Sandhu', comment: '" I got 3 small knuckle tattoos, a small tattoo on my forearm that was such beautiful fine line done by ilena, plus two small pieces on my upper biceps. She was so nice and the shop is so clean and a very comfortable environment. Definitely recommend her for some nice art!! "' },
    { id: 5, name: 'Alli Firman', comment: '" My boyfriend and i went to Ilena and it was the most fun and comfortable environment we’ve been in out of all our tattoos so far:) her work is very clean and she has such a fun energy, we are definitely going back for more !! "' },
    { id: 6, name: 'Leo Reus Oliveira', comment: '" I was tattooed with Ilena and I enjoyed so much my experience. She is able to get you relaxed and talking with her distracts you to the point you dont feel much the pain or even the time passing by. From talking with her I could tell that she is passionate about her career and want to keep progressing on it. Would totally tattoo with her again."' },
    { id: 7, name: 'Ava Ladoski', comment: '" i got 4 tattoos done by ilena today, she was so sweet, patient, friendly, compassionate! Recommend 100%. Studio was very clean and comfortable, definitely going back! Thank you ilena!!!!! "' },
    { id: 2, name: 'Amélie Hasker', comment: '" I went to ilena with a friend to get some flash, and it went great! i am very happy with my new pieces and can’t wait for to see the them healed :) "' },
   
  
  ];

  return (
    <Carousel autoPlay showArrows infiniteLoop emulateTouch showThumbs={false}>
      {items.map((item) => (
        <div key={item.id} className="slide">
          <p>{item.comment}</p>
          <h1>{item.name}</h1>

        </div>
      ))}
    </Carousel>
  );
};

export default TextCarousel;
