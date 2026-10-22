import { useFetch } from '../../hooks/useFetch'
import { useFilters } from '../../hooks/useFilters'
import { useLanguage } from '../../hooks/useLanguage'
import { API_URL } from '../../services/api'
import { STATUSES, type Member } from '../../types'
import type { Filters } from './filtersReducer'

export function FilterBar() {
  const { t } = useLanguage()
  const { filters, dispatch } = useFilters()
  const { data: members } = useFetch<Member[]>(`${API_URL}/members`)

  return (
    <div className="filters">
      <label>
        {t('filters.status')}
        <select
          value={filters.status}
          onChange={(e) =>
            dispatch({ type: 'status', status: e.target.value as Filters['status'] })
          }
        >
          <option value="ALL">{t('filters.allStatuses')}</option>
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {t(`status.${status}`)}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t('filters.member')}
        <select
          value={filters.memberId ?? ''}
          onChange={(e) => dispatch({ type: 'member', id: e.target.value || null })}
        >
          <option value="">{t('filters.allMembers')}</option>
          {members?.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
      </label>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        {t('filters.reset')}
      </button>
    </div>
  )
}
