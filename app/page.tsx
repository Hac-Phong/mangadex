import Carousel from '@/components/Carousel'
import LastUpdate from '@/components/LastUpdate'
import { useFetchData } from '@/hook/useFetchData'
export default async function Home() {
  const comic = await useFetchData('/trending-comics')
  const update = await useFetchData('/recent-update-comics?page=2').then(
    (res) => res.comics
  )

  return (
    <div className="">
      <Carousel props={comic.comics} />
      <LastUpdate props={update} />
    </div>
  )
}
