/*import { createClient } from '@supabase/supabase-js'
import { supabase } from './supabase'

const supabaseUrl = 'https://qjbakjbkpvyggsftsgeb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export const getVideos = () => {
    let { data: videos, error } = await supabase
    .from('videos')
    .select(`
        some_column,
        other_table (
            id
        )
    `)
    return (error, videos)
}
*/
