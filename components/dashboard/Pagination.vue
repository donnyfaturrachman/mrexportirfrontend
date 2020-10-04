<template>
<div class="ht-80 bd d-flex align-items-center justify-content-center mg-t-20">
    <ul class="pagination pagination-circle mg-b-0">
        <li class="page-item hidden-xs-down">
            <a class="page-link" href="#" aria-label="First" @click.prevent="changePage(1)" :disabled="pagination.current_page <= 1"><i class="fa fa-angle-double-left"></i></a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(pagination.current_page - 1)" :disabled="pagination.current_page <= 1"><i class="fa fa-angle-left"></i></a>
        </li>

        <li class="page-item" v-for="page in pages">
            <a class="page-link" href="#" :class="isCurrentPage(page) ? 'is-current' : ''" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(pagination.current_page + 1)" :disabled="pagination.current_page >= pagination.last_page"><i class="fa fa-angle-right"></i></a>
        </li>
        <li class="page-item hidden-xs-down">
            <a class="page-link" href="#" aria-label="Last" @click.prevent="changePage(pagination.last_page)" :disabled="pagination.current_page >= pagination.last_page"><i class="fa fa-angle-double-right"></i></a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props: ['pagination', 'offset'],
    methods: {
        isCurrentPage(page) {
            return this.pagination.current_page === page;
        },
        changePage(page) {
            if (page > this.pagination.last_page) {
                page = this.pagination.last_page;
            }
            this.pagination.current_page = page;
            this.$emit('paginate');
        }
    },
    computed: {
        pages() {
            let pages = [];
            let from = this.pagination.current_page - Math.floor(this.offset / 2);
            if (from < 1) {
                from = 1;
            }
            let to = from + this.offset - 1;
            if (to > this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            while (from <= to) {
                pages.push(from);
                from++;
            }
            return pages;
        }
    }
}
</script>
