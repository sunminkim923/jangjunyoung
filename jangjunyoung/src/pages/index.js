import Image from "next/image";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  useEffect(() => {
    if (mobile) setIsMobile(true);
  }, [mobile]);

  return (
    <>
      {!isMobile && (
        <>
          <div className={"h-20 flex items-center"}>
            <div className={"text-[24px] pl-[240px]"}>
              <span className={"main_title text-3xl"}>JangJunYoung</span>
              <span className={"text-[#4A0D00] font-[800] pl-2 text-3xl"}>
                닭강정
              </span>
            </div>
          </div>
          <div className={"max-h-[720px] w-full"}>
            <Image
              style={{ width: "100%", objectFit: "cover", maxHeight: "720px" }}
              src={"/images/image01_v3_.png"}
              alt={""}
              width={1920}
              height={720}
              prioriy={true}
              quality={100}
            />
          </div>
          <div className={"w-full mt-[120px] pb-[160px] flex justify-center"}>
            <Image
              src={"/images/image02_pc.png"}
              alt={""}
              width={1120}
              height={519}
              prioriy={true}
              quality={100}
            />
          </div>
          <div className={"max-h-[240px] w-full"}>
            <Image
              style={{ width: "100%", objectFit: "cover", maxHeight: "240px" }}
              src={"/images/image03_pc.png"}
              alt={""}
              width={1920}
              height={240}
              prioriy={true}
              quality={100}
            />
          </div>
          <div
            className={
              "bg-[#F9FAFC] border-b flex justify-center items-center py-[120px]"
            }
          >
            <YouTube
              videoId={"FVzLj_N_88E"}
              opts={{
                width: "1000",
                height: "540",
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
            />
          </div>
          <div
            className={
              "bg-[#4A0D00] flex justify-center items-center py-[80px]"
            }
          >
            <Image
              style={{
                width: "560px",
                objectFit: "contain",
                maxHeight: "560px",
              }}
              src={"/images/image04_v3_pc.png"}
              alt={""}
              width={560}
              height={560}
              prioriy={true}
              quality={100}
            />
            <Image
              style={{
                width: "560px",
                objectFit: "contain",
                maxHeight: "560px",
                cursor: "pointer",
              }}
              src={"/images/image05_pc.png"}
              alt={""}
              width={560}
              height={560}
              prioriy={true}
              quality={100}
              onClick={() => {
                window.open(
                  "https://map.naver.com/v5/entry/place/1640451008?c=17.66,0,0,0,dh"
                );
              }}
            />
          </div>
          <div className={"py-[64px] pl-[320px] bg-[#1E1E1E] text-[#CCCCCC]"}>
            <div className={"text-[14px]"}>
              <div>상호명 : 장준영 닭강정</div>
              <div>대표자 : 장준영</div>
              <div>주소 : 인천 부편구 주부토로 22번길 12, 1층</div>
              <div>예약/문의 : 032-511-0339</div>
            </div>
            <div className={"text-[12px] py-[24px]"}>
              copyright2023. Jangjunyoung All right reserved.
            </div>
          </div>
        </>
      )}

      {isMobile && (
        <>
          <div className={"h-[64px] flex items-center"}>
            <div className={"text-[24px] pl-[20px]"}>
              <span className={"main_title text-[20px]"}>JangJunYoung</span>
              <span className={"text-[#4A0D00] font-[800] pl-2 text-[20px]"}>
                닭강정
              </span>
            </div>
          </div>
          <div className={"max-h-[640px] w-full"}>
            <Image
              style={{ width: "100%", objectFit: "cover", maxHeight: "640px" }}
              src={"/images/image01_v3_mo.png"}
              alt={""}
              width={360}
              height={640}
              prioriy={true}
              quality={100}
            />
          </div>
          <div className={"w-full pt-[80px] pb-[96px] flex justify-center"}>
            <Image
              src={"/images/image02_mo.png"}
              alt={""}
              width={352}
              height={1163}
              prioriy={true}
              quality={100}
            />
          </div>
          <div className={"max-h-[160px] w-full"}>
            <Image
              style={{ width: "100%", objectFit: "cover", maxHeight: "160px" }}
              src={"/images/image03_mo.png"}
              alt={""}
              width={360}
              height={160}
              prioriy={true}
              quality={100}
            />
          </div>
          <div
            className={
              "bg-[#F9FAFC] border-b flex justify-center items-center py-[40px]"
            }
          >
            <YouTube
              videoId={"FVzLj_N_88E"}
              opts={{
                width: "320",
                height: "220",
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
            />
          </div>

          <div
            className={
              "bg-[#4A0D00] flex flex-col justify-center items-center pt-[48px] pb-[28px]"
            }
          >
            <Image
              style={{
                width: "320px",
                objectFit: "contain",
                maxHeight: "285px",
              }}
              src={"/images/image04_v3_mo.png"}
              alt={""}
              width={320}
              height={285}
              prioriy={true}
              quality={100}
            />
            <Image
              style={{
                width: "320px",
                objectFit: "contain",
                maxHeight: "320px",
                cursor: "pointer",
                marginTop: "40px",
              }}
              src={"/images/image05_pc.png"}
              alt={""}
              width={320}
              height={320}
              prioriy={true}
              quality={100}
              onClick={() => {
                window.open(
                  "https://map.naver.com/v5/entry/place/1640451008?c=17.66,0,0,0,dh"
                );
              }}
            />
          </div>
          <div
            className={
              "pt-[56px] pb-[122px] pl-[20px] bg-[#1E1E1E] text-[#CCCCCC]"
            }
          >
            <div className={"text-[14px]"}>
              <div>상호명 : 장준영 닭강정</div>
              <div>대표자 : 장준영</div>
              <div>주소 : 인천 부편구 주부토로 22번길 12, 1층</div>
              <div>예약/문의 : 032-511-0339</div>
            </div>
            <div className={"text-[12px] pt-[40px]"}>
              copyright2023. Jangjunyoung All right reserved.
            </div>
          </div>
        </>
      )}
    </>
  );
}
