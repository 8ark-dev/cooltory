import { Container } from "@/components/Container"
import { Card, Tabs } from "@geist-ui/core"

import { ExpPage } from "./exp/Page"
import { FlagPage } from "./flag/Page"

import classNames from "classnames"
import DgPage from "./frost/Page"
import OrderPage from "../order/Page"

export const Page = () => {
    return (
        <Container>
            <div className={classNames(
                'w-full',
                'h-full',

                'pt-12',
            )}>
                <Card>
                    <p className={classNames(
                        'text-sm',
                        'py-2',
                    )}>📸 각 이미지는 클릭 시 <i className={classNames(
                        'text-blue-500',
                    )}>입수 방법</i>이 표시됩니다. 또한, <i className="decoration-cyan-400 underline">[🐣]</i>은 얻을 수 없을 수 있는 도핑입니다.</p>
                </Card>
                <div className={classNames(
                    'w-full',
                    'h-full',

                    'pt-12',
                )}>
                    <Tabs hideDivider>
                        {/* 도핑 */}
                        <Tabs.Item label="도핑" value="1">
                            <ExpPage />
                        </Tabs.Item>
                        {/* 플래그 */}
                        <Tabs.Item label="플래그" value="2">
                            <FlagPage />
                        </Tabs.Item>
                        {/* 던전 프로스트 */}
                        <Tabs.Item label="던전 프로스트" value="4" >
                            <DgPage />
                        </Tabs.Item>
                        <Tabs.Item label="프로텍트 에스페라" value="5" >
                            <div className={classNames(
                                'flex',
                                'flex-col',
                            )}>
                                <span className={classNames('text-xs', 'text-gray-500')}>
                                    ref{' '}
                                    <a
                                        href="https://www.inven.co.kr/board/maple/2304/28788"
                                        target="_blank"
                                    >
                                        메이플스토리 인벤
                                    </a>
                                </span>
                                <div className={classNames(
                                    'w-full',
                                    'h-full',

                                    'flex',
                                    'justify-center',
                                    'items-center',

                                    'pt-12',
                                )}>
                                    <img src="/icon/espera.png" alt="프로텍트 에스페라" />
                                </div>
                            </div>

                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>

        </Container>
    )
}

export default Page