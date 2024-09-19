export type ExampleInternalPageProps = {
  params: {
    domain: string;
  };
};

const ExampleInternalPage = ({ params }: ExampleInternalPageProps) => {
  return (
    <div>
      <h1>Example page for the domain</h1>
      <h2>{params.domain}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        nisi, dignissimos eius dolor velit totam labore ea minima a dolorum
        atque reiciendis mollitia architecto cum explicabo, maxime modi at qui!
      </p>
    </div>
  );
};

export default ExampleInternalPage;
