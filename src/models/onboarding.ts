import { BaseEntity } from "@medusajs/medusa";
import { Column, Entity } from "typeorm";
import 'reflect-metadata'
@Entity()
export class OnboardingState extends BaseEntity {
  @Column({ nullable: true })
  current_step: string;

  @Column()
  is_complete: boolean;

  @Column({ nullable: true })
  product_id: string;
}
