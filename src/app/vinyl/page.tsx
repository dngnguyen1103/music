import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 pt-8 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex items-center justify-between px-52 py-2 relative">
        <div className=" absolute top-[0px] right-[170px] bg-[url('/blur_scroll.png')] z-10 bg-cover bg-center w-[610px] h-[760px] flex items-center justify-center">
          <div className=" absolute top-[100px] right-[38px] bg-[url('/scroll.png')] bg-cover bg-center w-[7px] h-[500px] flex items-center justify-center"></div>
        </div>
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

      <main className="flex flex-col relative row-start-2 items-center pb-10  h-full w-full ">
        <div className="bg-[url('/blur1.png')] bg-cover bg-center absolute w-96 h-[900px] top-0 right-0"></div>

        <div className=" flex flex-col relative gap-8 row-start-2 items-center w-full pt-20 px-52 pb-[1280px] bg-black overflow-hidden">
          <div className="bg-[url('/bg_blur3.png')] bg-cover bg-center absolute w-full h-[1000px] bottom-[600px] transform scale-x-[-1]"></div>

          <div className="bg-[url('/blur5.png')] bg-cover bg-center absolute w-full h-full bottom-[-750px] "></div>

          <div className="flex flex-row  gap-3 row-start-2 items-end h-full w-full">
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex flex-col gap-0">
                <div className="text-[88px] leading-[88px]">VINYL</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xs">Rcm something new</div>
                <div className="text-xs">
                  There are 3 Featured News section that change with each
                  promotional campaign, and the hero banner is updated according
                  to the corresponding title when the user clicks on each title.
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-4 items-center relative">
              <div className="flex gap-6 items-end ml-20 z-20">
                <div className="bg-[url('/group_love.png')] bg-cover bg-center w-28 h-28 flex items-center justify-center"></div>
                <div>
                  <div className="flex gap-2 items-end">
                    <Image
                      src="/tiempo.png"
                      alt="Next.js logo"
                      width={252}
                      height={62}
                      className="mr-4"
                      priority
                    />
                    <Image
                      src="/headphone.png"
                      alt="Next.js logo"
                      width={12}
                      height={12}
                      className="object-contain mb-1"
                      priority
                    />
                    <Image
                      src="/heart.png"
                      alt="Next.js logo"
                      width={12}
                      height={12}
                      className="object-contain mb-1"
                      priority
                    />
                  </div>
                  <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                </div>
              </div>
              <div className="flex gap-6 items-end ml-20 z-20">
                <div className="bg-[url('/biladen.png')] bg-cover bg-center w-28 h-28 flex items-center justify-center"></div>
                <div>
                  <div className="flex gap-2 items-end">
                    <Image
                      src="/tiempo.png"
                      alt="Next.js logo"
                      width={252}
                      height={62}
                      className="mr-4"
                      priority
                    />
                    <Image
                      src="/headphone.png"
                      alt="Next.js logo"
                      width={12}
                      height={12}
                      className="object-contain mb-1"
                      priority
                    />
                    <Image
                      src="/heart.png"
                      alt="Next.js logo"
                      width={12}
                      height={12}
                      className="object-contain mb-1"
                      priority
                    />
                  </div>
                  <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                </div>
              </div>
              <div className="flex gap-6 items-end ml-20 z-20">
                <div className="bg-[url('/wicked.png')] bg-cover bg-center w-28 h-28 flex items-center justify-center"></div>
                <div>
                  <div className="flex gap-2 items-end">
                    <Image
                      src="/tiempo.png"
                      alt="Next.js logo"
                      width={252}
                      height={62}
                      className="mr-4"
                      priority
                    />
                    <Image
                      src="/headphone.png"
                      alt="Next.js logo"
                      width={12}
                      height={12}
                      className="object-contain mb-1"
                      priority
                    />
                    <Image
                      src="/heart.png"
                      alt="Next.js logo"
                      width={12}
                      height={12}
                      className="object-contain mb-1"
                      priority
                    />
                  </div>
                  <div className="text-xl">NEVER TRUST A HAPPY SONG</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute px-52 gap-10 top-[760px] flex flex-col w-full">
            <div className="flex items-end justify-between w-full border-b">
              <div className="w-72 border-b-2 text-3xl">VINYL</div>
            </div>
            <div className="flex items-center justify-between w-full relative">
              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>
                  <div className="text-xs">Artist</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>
                  <div className="text-xs">Artist</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full relative">
              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full relative">
              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className=" bg-cover bg-center w-40 h-40 flex items-center justify-center"></div>
                <div>
                  <div className="text-xl">Album&apos;s name</div>

                  <div className="text-xs">Artist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-col gap-3 flex-wrap pt-4 items-center justify-center w-full bg-black z-20">
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
