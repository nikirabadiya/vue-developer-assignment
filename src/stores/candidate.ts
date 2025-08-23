import { defineStore } from 'pinia'
import type { Candidate } from '@/services/api'
import { getCandidateById, updateCandidate } from '@/services/api'

export const useCandidateStore = defineStore('candidate', {
  state: () => ({
    loading: false as boolean,
    error: '' as string,
    data: null as Candidate | null
  }),
  actions: {
    async fetch(id: string){
      this.loading = true; this.error = ''
      try { this.data = await getCandidateById(id) } 
      catch(e:any){ this.error = e?.message ?? 'Failed to load' }
      finally { this.loading = false }
    },
    async save(partial: Partial<Candidate>){
      this.loading = true; this.error = ''
      try { this.data = await updateCandidate(partial) } 
      catch(e:any){ this.error = e?.message ?? 'Failed to save' }
      finally { this.loading = false }
    }
  },
  getters: {
    name: (s) => s.data?.name ?? '',
    fields: (s) => s.data?.fields ?? {}
  }
})
