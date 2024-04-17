import RefinementList from "@components/RefinementList"
import CategoryProducts from "@components/CategoryProduct"

const Home = () => {
    return (
        <div className="mt-4 flex flex-col w-[100%] gap-7 sm:flex-row">
            <RefinementList />
            <CategoryProducts />
        </div>
    )
}
export default Home
