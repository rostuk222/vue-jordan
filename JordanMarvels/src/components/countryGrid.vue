<template>
    <div>
        <b-table :items="items" :fields="fields" tbody-tr-class="rowClass">
        </b-table>
    </div>
</template>

<script>
    export default {
      name: 'CountryStats',
    data() {
        return {
            fields: [
                {
                    key: 'country_name',
                    sortable: false,
                    class: 'cell-fix',
                    thClass: 'header-fill'
                },
                {
                    key: 'no_of_users',
                    label: 'No. of Users',
                    sortable: false,
                    class: 'cell-fix',
                    thClass: 'header-fill'
                }
            ],
        items: [
          { country_name: 'Qatar', no_of_users: '3,600,325', flag: '' },
            { country_name: 'United Kingdom', no_of_users: '2,000,325', flag: '' },
            { country_name: 'Australia', no_of_users: '1,800,325', flag: '' },
            { country_name: 'United States of America', no_of_users: '1,000,325', flag: '' },
            { country_name: 'Saudi Arabia', no_of_users: '250,000', flag: '' },
            { country_name: 'South Africa', no_of_users: '525,000', flag: '' },
            { country_name: 'Israel', no_of_users: '2,000,325', flag: '' }
        ]
      }
    }
  }
</script>

<style>
    .cell-fix {
        padding: 20px !important;
        border-color: rgba(204, 165, 117, 0.313839) !important;
    }
    .header-fill {
        background: rgba(199, 178, 153, 0.0898164);
        border: 1px solid rgba(80, 71, 60, 0.1);
        box-sizing: border-box;
    }
</style>