export interface Order {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}
