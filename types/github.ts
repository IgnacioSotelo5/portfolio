export interface GithubOwner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  type: string;
  site_admin: boolean;
}

export interface GithubRepoCompact {
  id: number;
  node_id?: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GithubOwner;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;

  // métricas y estados comunes
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count?: number;

  language: string | null;
  license?: { key?: string; name?: string; spdx_id?: string | null } | null;
  topics?: string[];

  // flags
  archived?: boolean;
  disabled?: boolean;
  visibility?: "public" | "private" | "internal";
  default_branch?: string;

  // opcional: permisos si se obtienen con token autenticado
  permissions?: { admin?: boolean; push?: boolean; pull?: boolean };
}
