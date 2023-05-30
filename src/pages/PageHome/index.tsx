<<<<<<< HEAD
import UI from "@/shared/UI";

const PageHome: React.FC = () => {
  return (
    <div>
      {/* <UI.Carousel /> */}
      <UI.Figure />
    </div>
  );
=======
import SimpleSlider from "@/shared/UI/UISlider";


// const  // TODO прописать сюда синтетику чтобы можно было нормально протестировать работу слайдера
const PageHome: React.FC = () => {
  return <div className="container">PageHome
  <SimpleSlider SliderPosts={Array()}>

  </div>;
>>>>>>> 7f2c556276f95d38789cc38aef15c78e203818cc
};

export default PageHome;
