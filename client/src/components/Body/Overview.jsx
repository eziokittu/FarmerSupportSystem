import PageTextArea from "../Reusable/PageTextArea";

const Overview = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-8">
      <PageTextArea
        heading={"Our Vision"}
        body={
          "Plant disease detection systemdesigned to assist farmers inidentifying and managing cropdiseases early using advancedimage recognition techniques.Technology: The system uses CNN to detect plant diseasesfrom leaf images, utilising alarge dataset."
        }
      />
    </div>
  );
};

export default Overview;
