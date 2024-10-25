// src/store/molecules.ts
import { defineStore } from 'pinia';
import molecules from '../../assets/json/molecules.json'; // 导入 JSON 文件
// import molecules from '../../assets/json/materials_data_optimized.json'; // 导入新的 JSON 文件

export const useMoleculesStore = defineStore('molecules', {
    state: () => ({
        moleculesData: molecules, // 将 JSON 数据存储在状态中
        currentPage: 1, // 当前页码
        itemsPerPage: 10, // 每页显示的数据条数
        filterKeyword: '', // 过滤关键字
    }),
    getters: {
        filteredData(): any[] {
            console.log('Filter Keyword:', this.filterKeyword); // 调试代码
            return this.moleculesData.filter(molecule =>
                Object.values(molecule).some(value =>
                    value?.toString().toLowerCase().includes(this.filterKeyword.toLowerCase())
                )
            );
        },
        paginatedData(): any[] {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredData.slice(start, end);
        },
        totalPages(): number {
            const total = Math.ceil(this.filteredData.length / this.itemsPerPage);
            return total;
        },
    },
    actions: {
        setCurrentPage(page: number) {
            this.currentPage = page;
        },
        setItemsPerPage(items: number) {
            this.itemsPerPage = items;
            this.currentPage = 1; // 重置到第一页
        },
        setFilterKeyword(keyword: string) {
            this.filterKeyword = keyword;
            this.currentPage = 1; // 重置到第一页
        },
    },
});
export default useMoleculesStore

