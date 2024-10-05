import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 pt-8 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex items-center justify-between px-52 py-2">
        <Image
          src="/logo.png"
          alt="Next.js logo"
          width={38}
          height={38}
          priority
        />
        <div className="flex gap-4 items-center">
          <div className="bg-slate-600 flex  h-8">
            <input type="text" className="bg-slate-600" />
            <div className="flex items-center pr-2 pl-1">
              <Image
                src="/search.png"
                alt="Next.js logo"
                width={18}
                height={14}
                priority
              />
            </div>
          </div>
          <Image
            src="/spotify.png"
            alt="Next.js logo"
            width={18}
            height={14}
            priority
          />
        </div>
      </header>

      <main className="flex flex-col relative row-start-2 items-center py-10  h-full w-full ">
        <div className="bg-[url('/blur1.png')] bg-cover bg-center absolute w-96 h-[900px] top-0 right-0"></div>

        <div className=" flex flex-col relative gap-8 row-start-2 items-center w-full px-52 pb-[1430px] bg-black">
          <div className="bg-[url('/bg_blur3.png')] bg-cover bg-center absolute w-full h-[1000px] bottom-[750px] "></div>
          <div className="bg-[url('/blur5.png')] bg-cover bg-center absolute w-full h-full bottom-[-700px] "></div>

          <div className="flex flex-row  gap-3 row-start-2 items-center h-full w-full">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-0">
                <div className="text-[88px] leading-[88px]">OUR MUSIC</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xs">
                  Hero banner is a large web banner image, prominently placed on
                  a web page, generally in the front and center.The hero banner
                  is often the first visual element a visitor encounters on the
                  site; its present an overview of the site&apos;s most
                  important content.
                </div>
                <div className="text-xs">
                  There are 3 Featured News section that change with each
                  promotional campaign, and the hero banner is updated according
                  to the corresponding title when the user clicks on each title.
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Image
                  src="/spotifyIcon.png"
                  alt="Next.js logo"
                  width={78}
                  height={78}
                  priority
                />
                <div className="flex items-center gap-20 w-full">
                  <div className="flex flex-col ">
                    <div className="text-xl">Show more on</div>
                    <div className="text-green-500 text-3xl font-semibold">
                      Spotify
                    </div>
                  </div>
                  <div className="bg-white px-6 py-1 text-black z-10">
                    Show more
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-4">
              <Image
                src="/edm.png"
                alt="Next.js logo"
                width={660}
                height={660}
                className="object-contain ml-20 bg-black"
                priority
              />
            </div>
          </div>

          <div className="absolute px-52 gap-8 top-[600px] flex flex-col w-full">
            <div className="flex items-end gap-8 w-full">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-semibold">01</div>

                <div className="flex items-end gap-4">
                  <div className="bg-[url('/biladen.png')] bg-cover bg-center w-40 h-40 flex items-center justify-center">
                    <Image
                      src="/play.png"
                      alt="Next.js logo"
                      width={42}
                      height={42}
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                    <div className="text-xs">18 songs | 1hr24m</div>
                  </div>
                </div>
              </div>

              <Image
                src="/tiempo.png"
                alt="Next.js logo"
                width={752}
                height={62}
                priority
              />
              <div className="flex items-center mb-2 gap-6">
                <Image
                  src="/headphone.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/heart.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/spotify_white.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex items-end gap-8 w-full">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-semibold">01</div>

                <div className="flex items-end gap-4">
                  <div className="bg-[url('/group_love.png')] bg-cover bg-center w-40 h-40 flex items-center justify-center">
                    <Image
                      src="/play.png"
                      alt="Next.js logo"
                      width={42}
                      height={42}
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                    <div className="text-xs">18 songs | 1hr24m</div>
                  </div>
                </div>
              </div>

              <Image
                src="/tiempo1.png"
                alt="Next.js logo"
                width={752}
                height={62}
                priority
              />
              <div className="flex items-center mb-2 gap-6">
                <Image
                  src="/headphone.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/heart.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/spotify_white.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex items-end gap-8 w-full">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-semibold">01</div>

                <div className="flex items-end gap-4">
                  <div className="bg-[url('/wicked.png')] bg-cover bg-center w-40 h-40 flex items-center justify-center">
                    <Image
                      src="/play.png"
                      alt="Next.js logo"
                      width={42}
                      height={42}
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                    <div className="text-xs">18 songs | 1hr24m</div>
                  </div>
                </div>
              </div>

              <Image
                src="/tiempo2.png"
                alt="Next.js logo"
                width={752}
                height={62}
                priority
              />
              <div className="flex items-center mb-2 gap-6">
                <Image
                  src="/headphone.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/heart.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/spotify_white.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex items-end gap-8 w-full">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-semibold">01</div>

                <div className="flex items-end gap-4">
                  <div className="bg-[url('/biladen.png')] bg-cover bg-center w-40 h-40 flex items-center justify-center">
                    <Image
                      src="/play.png"
                      alt="Next.js logo"
                      width={42}
                      height={42}
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                    <div className="text-xs">18 songs | 1hr24m</div>
                  </div>
                </div>
              </div>

              <Image
                src="/tiempo.png"
                alt="Next.js logo"
                width={752}
                height={62}
                priority
              />
              <div className="flex items-center mb-2 gap-6">
                <Image
                  src="/headphone.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/heart.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/spotify_white.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex items-end gap-8 w-full">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-semibold">01</div>

                <div className="flex items-end gap-4">
                  <div className="bg-[url('/group_love.png')] bg-cover bg-center w-40 h-40 flex items-center justify-center">
                    <Image
                      src="/play.png"
                      alt="Next.js logo"
                      width={42}
                      height={42}
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                    <div className="text-xs">18 songs | 1hr24m</div>
                  </div>
                </div>
              </div>

              <Image
                src="/tiempo1.png"
                alt="Next.js logo"
                width={752}
                height={62}
                priority
              />
              <div className="flex items-center mb-2 gap-6">
                <Image
                  src="/headphone.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/heart.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/spotify_white.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex items-end gap-8 w-full">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-semibold">01</div>

                <div className="flex items-end gap-4">
                  <div className="bg-[url('/wicked.png')] bg-cover bg-center w-40 h-40 flex items-center justify-center">
                    <Image
                      src="/play.png"
                      alt="Next.js logo"
                      width={42}
                      height={42}
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                    <div className="text-xs">18 songs | 1hr24m</div>
                  </div>
                </div>
              </div>

              <Image
                src="/tiempo2.png"
                alt="Next.js logo"
                width={752}
                height={62}
                priority
              />
              <div className="flex items-center mb-2 gap-6">
                <Image
                  src="/headphone.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/heart.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
                <Image
                  src="/spotify_white.png"
                  alt="Next.js logo"
                  width={30}
                  height={30}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-[url('/bg_gradient.png')] relative bg-cover bg-center justify-between w-full py-28 px-52">
          <div className="flex flex-col flex-1 h-[700] items-stretch">
            <div className="flex flex-col text-black">
              <div className="text-8xl mb-4">COLLABORATION CHANCES</div>
              <div className="text-[24px] ">
                WE ARE VERY PLEASED TO COLLABORATE,
              </div>
              <div className="text-[24px]">
                PLEASE CONTACT US IMMEDIATELY TO EXPLORE THESE COLLABORATION
                CHANCES.
              </div>
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="flex flex-col gap-2">
                <div>Join with us</div>
                <div className="flex gap-4">
                  <input
                    type="email"
                    className="bg-transparent p-3 border w-[500px] border-black text-black placeholder-black"
                    placeholder="EMAIL"
                  />
                  <button className="bg-black text-white py-2 px-6 h-[50px]">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex gap-3 text-black">
                <input
                  type="checkbox"
                  className="w-5 h-5 bg-transparent appearance-none border border-black
                   checked:bg-blue-500 checked:border-transparent shadow shadow-gray-600 checked:before:content-['✔']
                   checked:before:text-white checked:before:text-xs checked:before:flex checked:before:justify-center checked:before:items-center"
                />
                <div className="max-w-[420px] text-sm">
                  I agree to receive personalized updates and marketing messages
                  about Atlantic 75 on my information, interests, activities,
                  website visits and device data and in accordance with the
                  Privacy Policy.<br></br>
                  For information about how we use your personal information,
                  please see our Privacy Policy.
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/rocker.png"
            alt="Next.js logo"
            width={430}
            height={760}
            priority
            className="object-contain"
          />
          <Image
            src="/logo.png"
            alt="Next.js logo"
            width={110}
            height={110}
            priority
            className="object-contain absolute top-32 left-[50%] transform -translate-x-1/2"
          />
        </div>
      </main>
      <footer className="row-start-3 flex flex-col gap-3 flex-wrap pt-4 items-center justify-center bg-black">
        <div className="text-xs">
          © 2024 Interscope Records. All Right Reserved
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-spotify"></i>
          </div>

          <div className="flex gap-4 items-center">
            <a href="#">Help</a>
            <div className="border-r-2 h-3"></div>
            <a href="#">Subscriptions FAQs</a>
            <div className="border-r-2 h-3"></div>

            <a href="#">Terms</a>
            <div className="border-r-2 h-3"></div>

            <a href="#">Privacy</a>
            <div className="border-r-2 h-3"></div>

            <a href="#">Do Not Sell My Personal Infomation</a>
            <div className="border-r-2 h-3"></div>

            <a href="#">Cookie Choices</a>
          </div>
        </div>

        <div>Cookie Choices</div>
        <div className="text-xs">
          IF YOOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS
          WEBSITE, PLEASE CALL 866-682-4413 FOR ASSISTANCE
        </div>
      </footer>
    </div>
  );
}
