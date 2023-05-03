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
            <div>자랑처럼 새워 별 봅니다. 마리아 없이 새겨지는 봅니다.</div>
            <div>
              경, 슬퍼하는 가득 버리었습니다. 않은 이런 별에도 속의 못 덮어
              걱정도 있습니다.
            </div>
          </div>
        </div>
        <div
          className={
            "w-[360px] h-[200px] bg-[lightgray] flex items-center justify-center"
          }
        >
          IMG
        </div>
      </div>
      <div
        className={
          "h-[720px] bg-[white] flex flex-col items-center text-[#000000]"
        }
      >
        <div className={"text-[32px] font-[600] pt-[103px]"}>타이틀</div>
        <div className={"text-[16px] font-[200] pt-[24px]"}>
          자랑처럼 새워 별 봅니다. 마리아 없이 새겨지는 봅니다.
        </div>
        <div className={"pt-[80px] flex w-[1196px] justify-between"}>
          <div className={"w-[360px]"}>
            <div
              className={
                "h-[200px] bg-[lightgray] flex items-center justify-center"
              }
            >
              IMG
            </div>
            <div className={"text-center text-[18px] font-[600]"}>
              청결 테스트
            </div>
          </div>
          <div
            className={
              "w-[360px] h-[200px] bg-[lightgray] flex items-center justify-center"
            }
          >
            IMG
          </div>
          <div
            className={
              "w-[360px] h-[200px] bg-[lightgray] flex items-center justify-center"
            }
          >
            IMG
          </div>
        </div>
      </div>
    </>
  );
}
