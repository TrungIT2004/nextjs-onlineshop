import Image from 'next/image'
import Link from 'next/link'

export const RefinementList = () => {
    return (
        <ul className='flex flex-row flex-wrap w-[100%] sm:flex-col sm:w-[200px]'>
            <RefinementListItem title='Bìa hổ sơ' imgSrc='folders.webp'/>
            <RefinementListItem title='Thước' imgSrc='ruler.webp'/>
            <RefinementListItem title='Giấy' imgSrc='papers.webp'/>
            <RefinementListItem title='Bút chì gỗ' imgSrc='color-pencil.webp'/>
            <RefinementListItem title='Băng keo' imgSrc='tape.webp'/>
            <RefinementListItem title='Giấy ghi nhớ' imgSrc='post-it.webp'/>
            <RefinementListItem title='Kéo' imgSrc='cutter.webp'/>
            <RefinementListItem title='Máy tính' imgSrc='calculations.webp'/>
            <RefinementListItem title='Tập vở' imgSrc='notebook.webp'/>
            <RefinementListItem title='Bút bi' imgSrc='pen.webp'/>
        </ul>
    )
}

const RefinementListItem = (props: any) => {
    return (
        <li className='w-[25%] h-[60px] shadow-lg sm:w-[100%] flex items-center' >
            <Link href={`/category/${props?.title}`} className='w-full flex items-center'>
                <Image 
                src={`/assets/icons/${props.imgSrc}`}
                width={40}
                height={40}
                alt={props.imgSrc}
                className='mr-4'
                />
                <p>{props?.title}</p>
            </Link>
        </li>
    )
}

export default RefinementList
