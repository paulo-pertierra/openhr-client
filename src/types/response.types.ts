export type Role = "ADMIN"|"USER"

export interface Login {
  uuid?: string,
  role?: Role,
  jwt?: string,
  profile?: {
    email?: string,
    lastName?: string,
    firstName?: string,
    middleName?: string | null
  }
}