import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";

export default function Home() {
  return (
    <>
      <div className={"h-20 flex items-center"}>
        <div className={"text-[24px] pl-[240px]"}>
          <span className={"font-[200]"}>JangJunYoung</span>
          <span className={"text-[#4A0D00] font-bold pl-2"}>닭강정</span>
        </div>
      </div>
      <div className={"h-[1px] border border-[#E9E9E9]"} />
      <div
        className={"h-[720px] bg-[#4A0D00] flex items-center justify-evenly"}
      >
        <div className={"text-[white]"}>
          <div className={"text-[40px]"}>
            <span className={"font-[200]"}>장준영</span>
            <span className={"font-bold pl-2"}>닭강정</span>
          </div>
          <div className={"text-[40px]"}>
            <span className={"font-[200]"}>제 이름을 걸고</span>
            <span className={"font-bold pl-2"}>정직하게 만듭니다</span>
          </div>
          <div className={"text-[14px] font-[200] pt-6"}>
            <div>매일 매일 새 기름으로 가족이 먹는다는 마음으로 만듭니다.</div>
            <div>당일 생산, 당일 판매를 원칙으로 부끄럼 없이 만들겠습니다.</div>
          </div>
        </div>
        <Image
          src={"/images/DSC_2293.jpg"}
          alt={""}
          width={700}
          height={200}
          prioriy={true}
        />
      </div>
      <div
        className={
          "h-[720px] bg-[white] flex flex-col items-center text-[#000000]"
        }
      >
        <div className={"text-[32px] font-[600] pt-[103px]"}>
          장준영 닭강정 메뉴
        </div>
        <div className={"text-[16px] font-[200] pt-[24px]"}>
          다양한 입맛에 맞게 메뉴가 준비되어 있습니다.
        </div>
        <div className={"pt-[80px] flex w-[1400px] justify-between"}>
          <div className={"w-[400px]"}>
            <Image
              src={"/images/DSC_2348.jpg"}
              alt={""}
              width={400}
              height={200}
            />
            <div className={"text-center text-[18px] font-[600] pt-[38px]"}>
              양념 닭강정
            </div>
            <div className={"pt-4 text-[16px] font-[200] text-center"}>
              <div>달콤한 양념 닭강정</div>
              <div>어른도, 아이도 모두 좋아할 대표메뉴</div>
            </div>
          </div>
          <div className={"w-[400px]"}>
            <Image
              src={"/images/DSC_2309.jpg"}
              alt={""}
              width={400}
              height={200}
            />
            <div className={"text-center text-[18px] font-[600] pt-[38px]"}>
              후라이드 닭강정
            </div>
            <div className={"pt-4 text-[16px] font-[200] text-center"}>
              <div>담백하고 바삭한 후라이드 닭강정</div>
              <div>매일 새 기름으로 준비한 담백한 닭강정</div>
            </div>
          </div>
          <div className={"w-[400px]"}>
            <Image
              src={"/images/DSC_2276.jpg"}
              alt={""}
              width={400}
              height={200}
            />
            <div className={"text-center text-[18px] font-[600] pt-[38px]"}>
              고구마 맛탕
            </div>
            <div className={"pt-4 text-[16px] font-[200] text-center"}>
              <div>장준영 닭강정의 시그니처 메뉴</div>
              <div>밥 반찬으로도, 간식으로도 손색없는 달달한 고구마 맛탕</div>
            </div>
          </div>
        </div>
      </div>
      <div className={"h-[320px] w-screen opacity-100 mt-10"}>
        <div
          className={
            "h-[320px] w-screen absolute z-20 text-[white] flex justify-center items-center text-[40px] font-[200]"
          }
        >
          30년 전통의 노하우로 최고의 맛을위해 매일 노력합니다
        </div>
        <div
          className={"h-[320px] w-screen bg-[black] absolute z-10 opacity-50"}
        />
        <Image
          className={"object-cover"}
          src={"images/main_img_01_pc.svg"}
          alt={""}
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "320px",
          }}
        />
      </div>
      <div
        className={"h-[720px] bg-amber-100 flex justify-center items-center"}
      >
        <YouTube
          videoId={"FVzLj_N_88E"}
          opts={{
            width: "1200",
            height: "600",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
      <div className={"h-[720px] flex items-center justify-evenly"}>
        <div>
          <div className={"text-[32px] font-[600]"}>오시는길</div>
          <div className={"text-[16px] font-[200] pt-5"}>
            <div>인천 부평구 주부토로22번길 12 . 1층</div>
            <div className={"pt-2"}>동서약국 맞은편</div>
          </div>
        </div>
        <Image
          className={"cursor-pointer"}
          onClick={() => {
            window.location.href =
              "https://map.naver.com/v5/entry/place/1640451008?c=17.66,0,0,0,dh";
          }}
          src={"/images/jangjunyoung_map.png"}
          width={800}
          height={300}
        />
      </div>
      <div
        className={"h-[200px] bg-[#cccccc] flex items-center justify-center"}
      >
        Footer. 들어갈 정보. (주소, 사업자번호, 대표자, 연락처 등)
      </div>
    </>
  );
}
