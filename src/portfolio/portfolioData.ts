export interface PortfolioItem {
  name: string;
  url: string;
  tags: string[];
}

export interface Portfolio {
  rollingFund: {
    description: string;
    portfolioItems: PortfolioItem[];
  };
  angel: {
    description: string;
    portfolioItems: PortfolioItem[];
  };
}

export const portfolioData: Portfolio = {
  rollingFund: {
    description: "Rolling Fund",
    portfolioItems: [
      { name: "Astranis", url: "https://www.astranis.com/", tags: ["space"] },
      { name: "Cursor", url: "https://www.cursor.com/", tags: ["ai", "dev"] },
      { name: "fal", url: "https://www.fal.ai/", tags: ["ai"] },
      { name: "Elicit", url: "https://elicit.com", tags: ["ai", "saas"] },
      { name: "GitPod", url: "https://www.gitpod.io/", tags: ["dev", "board"] },
      {
        name: "Aerodome",
        url: "https://www.aerodome.com",
        tags: ["ai", "defense"],
      },
      { name: "Liquid AI", url: "https://www.liquid.ai", tags: ["ai"] },
      { name: "Zoo", url: "https://zoo.dev", tags: ["ai", "cad"] },
      { name: "Val Town", url: "https://www.val.town/", tags: ["dev"] },
      {
        name: "Unkey",
        url: "https://www.unkey.com/",
        tags: ["dev", "saas", "auth"],
      },
      {
        name: "Langbase",
        url: "https://www.langbase.com/",
        tags: ["ai", "dev"],
      },
      {
        name: "Inngest",
        url: "https://www.inngest.com/",
        tags: ["dev", "saas"],
      },
      { name: "Aalo Atomics", url: "https://www.aalo.com", tags: ["energy"] },
      {
        name: "Cleanlab",
        url: "https://www.cleanlab.ai/",
        tags: ["ai", "saas"],
      },
      { name: "Clerk", url: "https://clerk.com/", tags: ["auth"] },
      {
        name: "GitButler",
        url: "https://www.gitbutler.com/",
        tags: ["dev", "saas"],
      },
      { name: "QuantPi", url: "https://www.quantpi.com/", tags: ["ai"] },
      { name: "tldraw", url: "https://www.tldraw.com/", tags: ["dev", "saas"] },
      { name: "Vite Labs", url: "https://vite.dev/", tags: ["dev"] },
      { name: "ReSim", url: "https://www.resim.ai/", tags: ["ai"] },
      { name: "Tuist", url: "https://tuist.io/", tags: ["dev", "saas"] },
      {
        name: "BuildPass",
        url: "https://www.buildpass.com.au/",
        tags: ["b2b", "construction"],
      },
      { name: "Poolside", url: "https://www.poolside.ai/", tags: ["ai"] },
      { name: "Turso", url: "https://turso.tech", tags: ["dev", "db"] },
      { name: "Flux", url: "https://turso.tech", tags: ["dev", "db"] },
    ],
  },
  angel: {
    description: "Angel",
    portfolioItems: [
      { name: "Beta", url: "https://beta.team/", tags: ["aviation"] },
      { name: "Upside Foods", url: "https://upsidefoods.com", tags: [""] },
      {
        name: "Impossible",
        url: "https://impossiblefoods.com Foods",
        tags: [""],
      },
      { name: "Stripe", url: "https://stripe.com/", tags: ["b2b", "saas"] },
      { name: "Supabase", url: "https://supabase.com/", tags: ["dev", "saas"] },
      { name: "Weights & Biases", url: "https://www.wandb.ai/", tags: ["ai"] },
      { name: "Snyk", url: "https://snyk.io/", tags: ["dev", "saas"] },
      { name: "Prisma", url: "https://www.prisma.io/", tags: ["dev", "saas"] },
      {
        name: "Netlify",
        url: "https://www.netlify.com/",
        tags: ["board", "dev", "saas"],
      },
      {
        name: "PATH Water",
        url: "https://drinkpathwater.com",
        tags: ["dev", "saas"],
      },
      {
        name: "Graphite",
        url: "https://www.graphite.dev/",
        tags: ["dev", "saas"],
      },
      { name: "Retool", url: "https://retool.com/", tags: ["dev", "saas"] },
      { name: "Tito", url: "https://ti.to/", tags: ["board", "dev", "saas"] },
      { name: "Zed", url: "https://zed.dev/", tags: ["dev", "saas"] },
      {
        name: "PlanetScale",
        url: "https://planetscale.com/",
        tags: ["dev", "saas", "db"],
      },
      {
        name: "Railway",
        url: "https://railway.app/",
        tags: ["dev", "saas", "db"],
      },
      {
        name: "Replicated",
        url: "https://www.replicated.com/",
        tags: ["dev", "saas"],
      },
    ],
  },
};
