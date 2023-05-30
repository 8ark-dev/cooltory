import { Container } from '@/components/Container'
import { Card } from '@geist-ui/core'
import classNames from 'classnames'
import React from 'react'

export const Page = () => {
  return (
    <Container className={classNames(
      'mt-12',
    )}>

      <Card hoverable shadow>
        <p className={classNames(
          'py-2',
          'text-sm',
          'font-extrabold',

          'hover:cursor-pointer',
        )}>💡 더 효율적인 레벨업 루트가 있다면 쿨핀에게..</p>
      </Card>

      <div className={classNames(
        'w-full',
        'h-fit',

        'my-12',
        'py-4',


        'gap-y-4',

        'flex',
        'flex-col',
        'justify-center',

        'text-sm',
        'text-indigo-200',

        'max-sm:px-4',
        'max-sm:gap-y-2',
        'max-sm:text-xs'

      )}>
        <h3 className='text-white'>준비물 🧳</h3>
        <span className={classNames(
          'text-indigo-200',
          'mb-12',
        )}>
          키우려는 직업의 블랙 보조무기를 메모리아에서 사전에 뚫어놓기 <br />
          몬스터파크 익스트림 골드 🧂 <br />
          몬스터파크 익스트림 그린 🧂 <br />
          몬스터파크 익스트림 레드(공격력) / 블루(마력)  🧂<br />
          새싹칭호 <a onClick={() => {
            alert('길라잡이 30레벨 보상획득으로 얻을 수 있는 \n개꿀 쑥쑥 새싹 칭호입니다🌟\n설치 칸에 있으며, 창고를 통해 옮길 수 있습니다.')
          }}>🌱</a> <br />
          경험치쿠폰(3배짜리 1개 2배는 선택) </span>

{/* 
80~ : 갱도2 / 갱도4 / 방어시스템연구소 / 사헬지대 / 잠자는사막&꿈꾸는사막

90~ : 관출 / 폭군의성채로가는길(95이상 유니온 베이스있을때)

100~ : 폭군의성채로가는길 / 하늘둥지입구(전사제작펜) / 하늘둥지3 / 산양의골짜기2(도적제작펜)

110~ : 첫캐릭은 반레온길뚫 / 장난감공장1공정&2공정(버닝10인곳많으니 2~3맵사냥ㄱㄱ) / 데스테니(해적얼장) 

120~ : 뒤틀린회랑 / 잊혀진회랑 / 날카로운절벽4 / 월묘 / 판타스틱테마파크
130~ : 아랫마을현상금퀘스트 / 삼미호 / 무릉 초급~상급수련장 / 시련의동굴1 / 안개낀숲

140~ : 첫캐릭은 핑크빈길뚫 / 파르템-위험한유적수호자의길 / 안개낀숲 / 외딴습지 / 빨간코해적단 / 커닝타워지하1층

150~ : 커닝타워지하1층 / 커닝타워2층 / 커닝타워5층

160~ : 커닝타워5층 / 복도101

170~ : 복도101 / 복도202(해적얼장) / 암흑의숲1&2

180~ : 암흑의숲1&2 or 크리티아스 / 위험한파이트클럽 / 여우골짜기퀘스트(다람쥐까지만깰것)
190 : 헤이븐퀘스트 (리부트는 렙반감이 심해서 199가 아니고 190에 깨는게 좋음)

190~ : 여우숲아랫길2 / 풍화된바위지대 / 타오르는바위언덕
 */}


        <h3 className='text-white'>141 루트⚡</h3>
        <span>
          <b className='text-slate-200'> ❔ 각 서버를 돌면서 <i className='text-red-300'>버닝 필드</i>가 가장 높은 곳을 우선으로 사냥해 주세요</b> <br/>
          -10 : 직업별 튜토리얼 <br />
          -20 : [골렘의 사원3 : 파이어골렘]<br />
          -30 : [들개들의 싸움터 1 : 스펙터 들개]
        </span>
        
        <span>
          <b className='text-slate-200'> ❔ 테마던전을 <i className='text-purple-300'>엘리넬 리에나</i>로 하는 이유 : 장신구를 많이 줌</b> <br/>
          <b className='text-slate-200'> ❔ 35레벨 부터 <i className='text-cyan-300'>마이스터빌</i> 즉시이동으로 절대 경뿌 챙기기</b> <br/>
          -45 : 요정학원 엘리넬 또는 골드비치<br />
          -60 : 리에나 해협
        </span>


        <span>
          -70 : [조용한 습지, 축축한 습지 : 드레이크] <br/>
          -81 : [붉은 산호 숲 : 포이즌 푸퍼] or [구름공원 6 : 러스터픽시] <br/>
          -91 : [유랑단의 텐트 : 갈색 모래토끼] or [갱도 4 : 경비로봇 L] <br/> 
          -101: [연구소 C-2구역 : 로이드, 네오 휴로이드] or [관계자 외 출입금지 : 사이티]
        </span>
        <span>
        <b className='text-slate-200'> ❔ 101레벨 부터 좌측의 ⭐을 눌러 <i className='text-yellow-300'>메이프릴 아일랜드</i>를 절대 챙기세요</b> <br/>
        <b className='text-slate-200'> ❔ 101레벨 부터 길드 가입을 통해 <i className='text-yellow-300'>길드 경험치 및 스타포스</i>를 절대 챙기세요</b> <br/>
          -110: [미나르숲 동쪽 경계 : 듀얼 비틀] or [하늘둥지 3: 🌟5 블러드 하프]<br/>
          -126: [삐뚤어진 시간 (뒤틀린 시간의 길 3) : 🌟26 듀얼 파이렛]<br/>
          -141: [시련의 동굴 3 : 🌟50 파이어독]
        </span>

      </div>
    </Container>
  )
}

export default Page
