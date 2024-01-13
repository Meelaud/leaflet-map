import dynamic from 'next/dynamic'
import Image from 'next/image';

const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false });


export default function Home() {
  return (
    <>
      <header className={`text-5xl font-semibold text-indigo-950 p-5 place-content-center rounded-3xl flex items-baseline gap-5`}> 
      <Image src="/images/leaf.png" alt="Custom Icon" width = "100" height = "100"/>
      Canada Line 
      </header>
      <DynamicMap />
    </>
  )
}
