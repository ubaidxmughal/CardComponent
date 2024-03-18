

const Card = ({ cardHeader, cardFooter }) => {
  return (
    <div class="w-full m-14   text-center  border border-gray-200  shadow sm:p-8 bg-black rounded-3xl grid grid-rows-1 gap-4 p-5">
      {cardHeader}

      <hr style={{ marginInline: 50 }} />
      {cardFooter}
    </div>
  );
};

export default Card;
