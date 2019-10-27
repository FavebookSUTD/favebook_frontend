import { goto } from '@utils/goto';

export function* authSuccessHandler() {
  yield goto('/');
}
