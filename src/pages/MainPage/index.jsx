import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
// import DetailedCard from "../../components/DetailedCard";
import Layout from "../../components/Layout";
import { useEffect } from "react";
import { getPhotos } from "../../redux/actions/photos";
import "./styles.css";


const MainPage = () => {
  const photos = useSelector(state => state.photos.photos);
  const loading = useSelector(state => state.photos.isPhotosLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout nickname={"vanya"} id={1}>
      <div className="cnMainPageRoot">
        <InfiniteScroll
          dataLength={photos.length}
          next={() => console.log("next")}
          hasMore={true}
          loader={
            <p>Loading...</p>
          }
          endMessage={
            <p>That's all</p>
          }
        >
          {loading ? "loading" : console.log(photos)}
        </InfiniteScroll>
      </div>
    </Layout>
  );
};

export default MainPage;
