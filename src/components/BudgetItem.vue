<template>
    <div>
        <table>
                <tr>
                    <td>
                        {{name}} +{{amount}}  {{percent}}%
                    </td>
                </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'BudgetItem',
    data() {
        return {
            name: 'testingTesting',
            amount: 1234,
            percent: 0,
            isExpense: false
        };
    }
};
</script>

<style scoped>
table,
tr,
th {
    border-bottom: 1px solid lightgrey;
}
th,
td {
    padding: 15px;
    text-align: left;
}
</style>
