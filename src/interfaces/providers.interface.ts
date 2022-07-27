export interface Provider {
  id: string;
  page_id: string;
  component_id: string;
  order: number;
  style_id: string;
}

export interface ProviderData extends Provider {
  components: object[];
}
