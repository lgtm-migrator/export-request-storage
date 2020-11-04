import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { Geometry } from 'geojson';

@Entity('statuses')
@Index(['fileName', 'directoryName'], { unique: true })
export class StatusEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  @Index({ unique: true })
  public taskId: string;

  @Column()
  @Index()
  public userId: string;

  @Column()
  public fileName: string;

  @Column()
  public directoryName: string;

  @Column()
  public fileURI: string;

  @Column()
  public progress: number;

  @Column()
  public status: string;

  @Column('geometry', {
    spatialFeatureType: 'Geometry',
    srid: 4326,
  })
  @Index({ spatial: true })
  public geometry: Geometry;

  @Column()
  public estimatedFileSize: number;

  @Column()
  public realFileSize: number;

  @Column('timestamp with time zone')
  public creationTime: Date;

  @Column('timestamp with time zone')
  public updatedTime: Date;

  @Column('timestamp with time zone')
  @Index()
  public expirationTime: Date;

  public constructor(init?: Partial<StatusEntity>) {
    Object.assign(this, init);
  }
}
