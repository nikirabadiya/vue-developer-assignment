import { onMounted, computed } from 'vue'
import { useCandidateStore } from '@/stores/candidate'

export function useCandidate(id: string){
  const store = useCandidateStore()
  onMounted(()=>{ if(!store.data) store.fetch(id) })
  return {
    store,
    candidate: computed(()=> store.data),
    loading: computed(()=> store.loading),
    error: computed(()=> store.error),
    save: store.save
  }
}
