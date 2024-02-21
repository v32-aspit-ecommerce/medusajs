import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp } from 'typeorm';

@Entity("publishable_api_key")
export class PublishableApiKey extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
 
  @Column({  type: 'timestamp with time zone'})
  created_at: Date;
  
  @Column({ type: 'timestamp with time zone', nullable: true})
  updated_at: Date;
 
  @Column()
  created_by: string;

  @Column({ type: 'timestamp with time zone', nullable: true})
  revoked_at: Date;

  @Column({ nullable: true})
  revoked_by: string;

  @Column()
  title: string;
 
  // You can add type-safe methods here for model-specific logic
}