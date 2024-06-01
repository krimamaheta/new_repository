
import Image from "next/image"
import Styles from "./../../app/landingpage/card.module.css";
import Ring from "./../../../public/ring.png"
import image from "./../../../public/landingpage1.png"
import Landimage from "./../../../public/deco3.png"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import annyversary from "./../../../public/anniversary.png"
import b1 from "./../../../public/birthday1.png"
import Thread from "./../../../public/thread1.png"
import wed1 from "./../../../public/wed1.png"



export const LandingPage = (): JSX.Element => {
  return (
    <div>
      <div className={Styles.service_container}>
        <div className={Styles.service_image_div}>
          <Image
            src={Landimage}
            alt="Manager"
            className={Styles.service_image}
            width={700}
            height={900}
          />
        </div>

        <div className={Styles.service_description_container}>
          <div className={Styles.service_description_title}>
            <h1>Event Maker</h1>
          </div>
          <div className={Styles.service_description_summary}>

            <h2 className={Styles.heading2}>Create Special Service For Your Events</h2>
            <p>
              Unique,memorable events
              production of social and corporate events!!!!!

            </p>
            <Stack direction="row" spacing={2} className="brown-text">
              <div style={{marginTop:'1rem',backgroundColor:'rgb(238, 228, 216)',borderRadius:'14px',fontSize:'17px',padding:'1rem'}}>
              <button>
                <a href="/signup" className={Styles.button}>SignUp</a>
              </button>
              </div>
             
            </Stack>
          </div>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Features</h1>
          
          <div className="flex mt-6 justify-center">

            <div className="w-16 h-1 rounded-full bg-yellow-700 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow border border-black rounded-lg p-4 bg-brown-300 mb-10">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">EventMaker</h2>
              <div className="leading-relaxed text-base">Event planning, design  within time limits. Working with clients to identify their needs
                and ensure customer satisfaction,Organizing facilities and details such as decorations, catering,
                location,  special guests etc.</div>
            </div>

          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow border border-black rounded-lg p-4 bg-brown-100 mb-10">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>


              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Decorentals</h2>
              <div className="leading-relaxed text-base">
                Our team specializes in crafting mesmerizing lighting and flower arrangements that illuminate your venue with warmth and sophistication
                our skilled decorators also excel in creating breathtaking floral arrangements.</div>
            </div>


          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow border border-black rounded-lg p-4 bg-brown-100 mb-10">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Catering</h2>
              <div className="leading-relaxed text-base"> Our catering team offers professional service and seamless coordination to ensure that every aspect of your dining experience is flawless,
                From menu planning , allowing you to relax and enjoy your event while we take care of the rest.</div>
            </div>

          </div>
        </div>
        
      </div>
      <div style={{marginLeft:'52rem',fontSize:'30px',textDecoration:'underline',color:'rgb(90, 47, 16)'}}>Events</div>
      <div className={Styles.s_main}>
        <div className={Styles.service_container}>
          <div className={Styles.service_image_div}>
            <Image
              src={Ring}
              alt="Manager"
              className={Styles.service_image}
              width={1800}
              height={1600}
            />
          </div>

          <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Ring Ceremony</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <p>
                At Event Maker,
                we understand the importance of this cherished moment in your journey together,
                and we are dedicated to ensuring that every detail of your ring ceremony is nothing short of perfection.
                From the elegant décor to the exquisite floral arrangements, our team of experienced event planners will work
                closely with you to bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.service_container}>
          <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Wedding Ceremony</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <p>
                Elevate your special day to extraordinary heights with our meticulously crafted wedding ceremony services.
                At EventMaker,
                we understand the significance of this once-in-a-lifetime event,
                and we are committed to turning your dreams into reality
              </p>
            </div>
          </div>
          <div className={Styles.service_image_div}>
            <Image
              src={wed1}
              alt="Manager"
              className={Styles.service_image}
              width={1800}
              height={1600}
            />
          </div>
        </div>



        <div className={Styles.service_container}>
          <div className={Styles.service_image_div}>
            <Image
              src={Thread}
              alt="Manager"
              className={Styles.service_image}
              width={1800}
              height={1600}
            />
          </div>

          <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Yagnopavit Ceremony</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <p>
                Embark on a sacred journey of spiritual growth and knowledge with our Upanayan Sanskar ceremony services.
                At EventMaker, we recognize the profound significance of this
                traditional Hindu rite of passage and are honored to help you celebrate this important
                milestone in your childs life.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.service_container}>
          <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Birthday Ceremony</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <div>
                Make every birthday a memorable occasion with our exceptional birthday celebration services.
                At EventMaker, we understand the importance of
                commemorating another year of life, and we are committed
                to creating unforgettable moments for you and your children
              </div>
            </div>
          </div>
          <div className={Styles.service_image_div}>
            <Image
              src={b1}
              alt="Manager"
              className={Styles.service_image}
              width={1800}
              height={1600}
            />
          </div>
        </div>

        <div className={Styles.service_container}>
          <div className={Styles.service_image_div}>
            <Image
              src={annyversary}
              alt="Manager"
              className={Styles.service_image}
              width={1600}
              height={1000}
            />
          </div>

          <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Anniversary party</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <div>
                Mark the milestone of your enduring love and commitment with our bespoke wedding
                anniversary celebration services. At Event Maker, we believe that every love story
                deserves to be celebrated in style, and we are dedicated to creating unforgettable
                moments that honor your journey together.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.main}>
        <h2 className={Styles.heading3}>Event Memories</h2>
        <div className={Styles.phead3}>
          In our journey as event makers,
          we have curated a diverse array of unforgettable moments,
          from fairy-tale weddings in picturesque gardens to romantic ring
          ceremonies under the starlit sky.
          Steeped in tradition and love, our yagnopavit ceremonies have
          marked significant passages into adulthood,
          while milestone anniversaries have been celebrated with elegance
          and grace, showcasing years of cherished memories.
          Vibrant birthday celebrations have filled the air with joy and
          laughter, each event a testament to the power of love,
          unity, and shared moments. Across weddings, ring ceremonies,
          yagnopavit, anniversaries, and birthdays, our commitment to crafting memorable experiences remains unwavering,
          ensuring that every occasion is a reflection of our dedication to excellence and the magic of  special moments
        </div>
      </div>



    </div>
  )
};
