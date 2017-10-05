export enum ETaskStatuses {
    closed,
    open,
    inProgress
}

export const statusTranslations = [
    { text: 'Открыта', value: ETaskStatuses.open},
    { text: 'Закрыта', value: ETaskStatuses.closed},
    { text: 'В процессе', value: ETaskStatuses.inProgress},
]
