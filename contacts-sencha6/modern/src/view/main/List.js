/**
 * This view is an example list of people.
 */
Ext.define('contacts.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'contacts.store.Personnel'
    ],

    title: 'Personnel',

    bind: '{personnel}',

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100, flex: 1 },
        { text: 'Email', dataIndex: 'email', width: 230, flex: 1},
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
