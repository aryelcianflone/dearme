import { connect as client, Channel, Connection } from 'amqplib';
import { Configuration, config as default_config } from '../application';
import { thenable } from '../utilities';

export type Channel = Channel;
export type Connection = Connection;

export const amqp: Promise<Connection> = connect(default_config);

export function connect(config: Configuration = default_config): Promise<Connection> {
    const URL = config<string>('amqp.url');

    return thenable(() => client(URL));
}
