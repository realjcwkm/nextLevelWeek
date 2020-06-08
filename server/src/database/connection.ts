import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

/**
 * Migrations = historico do banco de dados
 * 
 * entidades:
    * points (pontos de coleta)
        * image
        * name
        * email
        * whatsapp
        * latitude
        * longitude
        * city
        * uf
    * items (itens para coleta)
        * image
        * title
    * point_items (relacionamento de itens que um ponto de coleta pode ter)
        * point_id
        * items_id
    * Muitos para muitos (N-N)(Pivot)
 *
 */