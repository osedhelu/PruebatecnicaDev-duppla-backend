export interface MarvelRepositoryImpl {
  findAll(): Promise<any>;
  findOne(id: string): Promise<any>;
}
