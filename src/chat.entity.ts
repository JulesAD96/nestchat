import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("chats")
export class Chat {
    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column()
    email:string;

    @Column()
    text:string;

    @CreateDateColumn()
    created_at: Date
}