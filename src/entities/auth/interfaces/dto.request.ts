export interface RegisterDto {
  email: string;
  password: string;
  fullName: string;
  universityId: number;
}

export interface LoginDto {
  email: string;
  password: string;
}

