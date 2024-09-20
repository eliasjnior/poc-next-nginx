export type DomainPageProps = {
  params: {
    domain: string;
  };
};

const domains: Record<string, { name: string; description: string }> = {
  "example1.localhost": {
    name: "Example",
    description: "This is an example domain 1",
  },
  "example2.localhost": {
    name: "Example",
    description: "This is an example domain 2",
  },
  "example1.eliasjr.dev": {
    name: "Example",
    description: "This is an example domain 1",
  },
  "example2.eliasjr.dev": {
    name: "Example",
    description: "This is an example domain 2",
  },
  "example1.cycle-dev.com": {
    name: "Example",
    description: "This is an example domain 1",
  },
  "example2.cycle-dev.com": {
    name: "Example",
    description: "This is an example domain 2",
  },
};

const DomainPage = ({ params }: DomainPageProps) => {
  const domain = domains[params.domain];

  if (!domain) {
    return <h1>Domain not found</h1>;
  }

  return (
    <div>
      <h1>Profile page: {domain.name}</h1>
      <p>{domain.description}</p>
    </div>
  );
};

export default DomainPage;
